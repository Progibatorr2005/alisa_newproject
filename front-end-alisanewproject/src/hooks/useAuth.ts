import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => useTypedSelector((state: { user: any; }) => state.user)