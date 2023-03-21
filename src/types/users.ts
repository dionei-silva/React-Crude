import Task from "./task";

type User = {
    email: string;
    password: string;
    tasks: Array<Task>;
};

export default User;
