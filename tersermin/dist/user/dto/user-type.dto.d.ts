export declare class UserTypeValidation {
    username: string;
    password: string;
    type: string;
}
export declare class UserTypeValidationCanEmpty {
    username: string;
    password: string;
    type: string;
}
export declare class alterUserValidation {
    oldUser: UserTypeValidation;
    newUser: UserTypeValidationCanEmpty;
}
