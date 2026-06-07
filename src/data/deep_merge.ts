import type { Competitor, DeepResearch } from "./competitors";
import { deepCloudNative } from "./deep_cloudnative";
import { deepEnterprise } from "./deep_enterprise";
import { deepAI } from "./deep_ai";
import { deepInfra } from "./deep_infra";
import { deepInfra2 } from "./deep_infra2";
import { deepGraveyard } from "./deep_graveyard";

const allDeep: Record<string, DeepResearch> = {
  ...deepCloudNative,
  ...deepEnterprise,
  ...deepAI,
  ...deepInfra,
  ...deepInfra2,
  ...deepGraveyard,
};

export function attachDeepResearch(competitors: Competitor[]): Competitor[] {
  return competitors.map((c) => {
    const deep = allDeep[c.name];
    return deep ? { ...c, deep } : c;
  });
}
