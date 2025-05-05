interface LoginFormData {
  email: string;
  password: string;
}
type NotesType = {
  content: string;
  id: string;
};
interface CallRecord {
  id: string;
  call_type: string;
  created_at: string;
  direction: string;
  duration: string;
  from: string;
  is_archived: boolean;
  notes: NotesType[];
  to: string;
  via: string;
}

interface AddNotesType {
  id: string;
  call_type: string;
  duration: string;
  from: string;
  to: string;
  via: string;
  notes: NotesType[];
}
interface AddNotesProps extends AddNotesType {
    getData:()=>void;
}
export enum EPageType {
  PAGE = "page",
  PREV = "prev",
  NEXT = "next",
  JUMP_PREV = "jump-prev",
  JUMP_NEXT = "jump-next",
}
export type { LoginFormData, CallRecord, AddNotesProps };
