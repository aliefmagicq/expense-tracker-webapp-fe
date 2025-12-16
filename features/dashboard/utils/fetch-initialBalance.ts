import { appConfig } from '@/app.config';
import { fetchServer } from '@/features/core/axios/fetch-server';

type FetchInitialBalancesResponse = {
  data: Data;
  error: string;
};

type Data = {
  initial_balances: Initialbalance[];
  initial_balances_total: string | null;
};

type Initialbalance = {
  id: number;
  amount: number;
  notes: string;
  branch_id: number;
  created_at: string;
  updated_at: string;
};

export async function fetchInitialBalances(): Promise<FetchInitialBalancesResponse> {
  const apiLaravelUrl = `${appConfig.laravelApiURL}/initial-balance`;

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
      data: {
        initial_balances: [],
        initial_balances_total: null,
      },
      error: setError,
    };
  }
}
