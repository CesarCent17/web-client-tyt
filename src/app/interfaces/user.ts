import { Department } from "./department";
import { JobTitle } from "./jobtitle";

export interface User {
  id: string
  username: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  department: Department;
  jobTitle: JobTitle;
}
