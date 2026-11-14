const API_BASE_URL = "http://localhost:3000/api";

// Helper request wrapper with token support
const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("pickup_token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.warn(`[API Call Error] ${endpoint}:`, error.message);
    throw error;
  }
};

export const api = {
  // Auth API
  signUp: (userData) =>
    request("/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  signIn: (credentials) =>
    request("/auth/signin", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  getMe: () => request("/auth/me"),

  // Contact API
  submitContact: (contactData) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    }),

  // Semesters & Resources API
  getSemesters: () => request("/semesters"),

  getSemesterById: (id) => request(`/semesters/${id}`),
};

export default api;
