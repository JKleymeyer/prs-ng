import { User } from './user.class';

export class Request {
    id: number;
    userId: User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: string;
    submittedDate: Date;
    reasonForRejection: string;

    constructor(id: number = 0, userId: User = new User(), description: string = "", 
    justification:string = "", dateNeeded:Date = null, deliveryMode:string = "",
    status: string = "", total: string = "", submittedDate: Date = null, reasonForRejection: string = null) {
        this.id=id;
        this.userId=userId;
        this.description= description;
        this.justification=justification;
        this.dateNeeded=dateNeeded;
        this.deliveryMode=deliveryMode;
        this.status=status;
        this.total=total;
        this.submittedDate=submittedDate;
        this.reasonForRejection=reasonForRejection;

    }


}
