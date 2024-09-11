export enum AppointmentStatus {
    ACTIVE = 'active',
    CANCELLED = 'cancelled'
}

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: AppointmentStatus;
    description: string;
}

export { IAppointment };