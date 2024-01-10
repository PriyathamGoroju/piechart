import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("username");
        navigate("/");
    }
    return (
        <>
            <button onClick={logout}>
                LOG OUT
            </button>
        </>
    );
}
