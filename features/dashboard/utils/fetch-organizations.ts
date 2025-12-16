import { appConfig } from '@/app.config';
import { fetchServer } from '@/features/core/axios/fetch-server';

type FetchOrganizationsResponse = {
  data: Data[];
  error: string;
};

type Data = {
  id: number;
  name: string;
  description: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  closing_balances_total: number;
  transactions_total: number;
  transactions_income_total: number;
  transactions_expense_total: number;
  branches: Branch[];
};

type Branch = {
  id: number;
  name: string;
  description: string;
  organization_id: number;
  author_id: number;
  created_at: string;
  updated_at: string;
  transactions_count: number;
  transaction_expense_total: number;
  transaction_income_total: number;
  daily_balances: Dailybalance[];
};

type Dailybalance = {
  id: number;
  opening_balance: number;
  closing_balance: number;
  transaction_id: number;
  branch_id: number;
  created_at: string;
  updated_at: string;
  is_latest_daily_balance: boolean;
};

/**
 *
 * @returns Promise<FetchOrganizationsResponse>
 */
export async function fetchOrganizations(): Promise<FetchOrganizationsResponse> {
  const apiLaravelUrl = `${appConfig.laravelApiURL}/organization`;
  try {
    return await fetchServer({
      method: 'get',
      url: apiLaravelUrl,
      includeAuthorization: true,
    });
  } catch (error) {
    const setError =
      error instanceof Error ? error.message : 'Unexpected error';

    return {
      data: [],
      error: setError,
    };
  }
}
