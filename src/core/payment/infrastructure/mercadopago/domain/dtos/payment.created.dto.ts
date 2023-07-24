export interface PaymentCreatedDTO {
    action:       string;
    api_version:  string;
    data:         Data;
    date_created: Date;
    id:           number;
    live_mode:    boolean;
    type:         string;
    user_id:      string;
}

export interface Data {
    id: string;
}
