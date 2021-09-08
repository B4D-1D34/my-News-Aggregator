import {
  MainQueryProvider,
  QueryProvider,
  SetQueryProvider,
} from "../contexts/query.context";
import { NewsProvider } from "../contexts/currentNews.context";
import { FetchingProvider } from "../contexts/isFetching.context";
import { AllNewsProvider } from "../contexts/allNews.context";
import {
  MainPrequeryProvider,
  PrequeryProvider,
  SetPrequeryProvider,
} from "./preQuery.context";
import { PredictiveNewsProvider } from "./predictiveNews.context";

const MainProvider = (props) => (
  <MainPrequeryProvider>
    <PrequeryProvider>
      <SetPrequeryProvider>
        <PredictiveNewsProvider>
          <MainQueryProvider>
            <QueryProvider>
              <SetQueryProvider>
                <NewsProvider>
                  <FetchingProvider>
                    <AllNewsProvider>{props.children}</AllNewsProvider>
                  </FetchingProvider>
                </NewsProvider>
              </SetQueryProvider>
            </QueryProvider>
          </MainQueryProvider>
        </PredictiveNewsProvider>
      </SetPrequeryProvider>
    </PrequeryProvider>
  </MainPrequeryProvider>
);
export default MainProvider;
