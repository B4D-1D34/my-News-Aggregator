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
import {
  MainPageNumberProvider,
  PageNumberProvider,
  SetPageNumberProvider,
} from "./pageNumber.context";

const MainProvider = (props) => (
  <MainPrequeryProvider>
    <PrequeryProvider>
      <SetPrequeryProvider>
        <MainQueryProvider>
          <QueryProvider>
            <SetQueryProvider>
              <PredictiveNewsProvider>
                <MainPageNumberProvider>
                  <PageNumberProvider>
                    <SetPageNumberProvider>
                      <NewsProvider>
                        <FetchingProvider>
                          <AllNewsProvider>{props.children}</AllNewsProvider>
                        </FetchingProvider>
                      </NewsProvider>
                    </SetPageNumberProvider>
                  </PageNumberProvider>
                </MainPageNumberProvider>
              </PredictiveNewsProvider>
            </SetQueryProvider>
          </QueryProvider>
        </MainQueryProvider>
      </SetPrequeryProvider>
    </PrequeryProvider>
  </MainPrequeryProvider>
);
export default MainProvider;
