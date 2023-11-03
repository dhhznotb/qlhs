import HocPhi from "../pages/Dashboard/HocPhi";
import KetQuaHocTap from "../pages/Dashboard/KetQuaHocTap";
import OnTap from "../pages/Dashboard/OnTap";
import ThoiKhoaBieu from "../pages/Dashboard/ThoiKhoaBieu";
import ThongTinHocSinh from "../pages/Dashboard/ThongTinHocSinh";
import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routes =[
    {
        path: "/",
        page: HomePage
    },
    {
        path: "/login",
        page: LoginPage
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: "/dashboard",
        page: Dashboard
    },
    {
        path: "/thongtinhocsinh",
        page: ThongTinHocSinh
    },
    {
        path: "/thoikhoabieu",
        page: ThoiKhoaBieu
    },
    {
        path: "/ontap",
        page: OnTap
    },
    {
        path: "/ketquahoctap",
        page: KetQuaHocTap
    },
    {
        path: "/hocphi",
        page: HocPhi
    },
]