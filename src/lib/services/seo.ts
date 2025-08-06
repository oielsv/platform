import { createApiClient } from '@/lib/api';

interface ISeo {
  [key: string]: {
    title: string;
    metaDescription: string;
    metaKeywords: string;
  };
}

const SEO_CMS_PRO_ROOT_API_URL = 'https://go-cms.trexname.com/api/public/v1/eng/partners';
// const SEO_ROOT_API = 'https://go.cmsbetconstruct.com/api/public/v1/eng/partners/1/';

export function createSeoService() {
  const apiClient = createApiClient(SEO_CMS_PRO_ROOT_API_URL);

  return {
    getMetadata: async (): Promise<ISeo> => {
      /* @TODO: get partnerId from platform */
      const partnerId = '1876004'; /* @WARNING: hardcoded KG partnerId */

      const { data } = await apiClient.get<ISeo>(`/${partnerId}/seo/page`, {
        params: {
          platform: '0', // TODO: get from platform
          country: 'AM', // TODO: get from geo location
        },
      });

      // @ts-ignore
      return data;
    },
  };
}
