export interface TaskInfoInterface {
    // process: string;
    // subprocess: string;
    task_id: string;
    title: string;
    slug: string;
    // type: string;
    accordian: boolean;
    allow_multiple: boolean;
    allow_duplicate_email: boolean;
    allow_group: boolean;
    // onload_api: any[];
    // onsubmit_api: any[];
    form_fields: any[];
    skip_fields: string[];
  }