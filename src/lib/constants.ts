export const API_URL = "http://localhost:3000";

// QUERY_KEY FACTORY 방식
export const QUERY_KEYS = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "lst", id],
  },
};
