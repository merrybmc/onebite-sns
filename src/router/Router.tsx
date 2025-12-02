import CounterPage from "@/pages/CounterPage";
import IndexPage from "@/pages/IndexPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import TodoDetailPage from "@/pages/TodoDetailPage";
import TodoListPage from "@/pages/TodoListPage";
import { Outlet, Route, Routes } from "react-router";

function AuthLayout() {
  return (
    <div>
      <header>Auth</header>
      {/* 페이지 컴포넌트 레이아웃 출력 */}
      <Outlet />
    </div>
  );
}

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="todolist/:id" element={<TodoDetailPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
      <Route path="/todolist" element={<TodoListPage />}></Route>
    </Routes>
  );
}
