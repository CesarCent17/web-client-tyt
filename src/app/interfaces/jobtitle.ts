export interface JobTitle {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
  createdByUserId?: string | null;
}
