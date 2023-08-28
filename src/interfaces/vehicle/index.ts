import { PerformanceInterface } from 'interfaces/performance';
import { ReservationInterface } from 'interfaces/reservation';
import { UsageInterface } from 'interfaces/usage';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  vehicle_type: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  performance?: PerformanceInterface[];
  reservation?: ReservationInterface[];
  usage?: UsageInterface[];
  organization?: OrganizationInterface;
  _count?: {
    performance?: number;
    reservation?: number;
    usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  vehicle_type?: string;
  organization_id?: string;
}
