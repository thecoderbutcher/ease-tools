'use client';

import { UserInfo } from "../_components/UserInfo";
import { useCurrentUser } from "@/hooks/use-current-user";

const Dashboard = () => { 
    const user  = useCurrentUser();
    return (
        <>  
            <UserInfo 
            >
            </UserInfo>
        </>
    );
}
export default Dashboard;