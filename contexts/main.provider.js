import {
  MainQueryProvider,
  QueryProvider,
  SetQueryProvider,
} from "../contexts/query.context";
import { NewsProvider } from "../contexts/currentNews.context";
import { FetchingProvider } from "../contexts/isFetching.context";
import { AllNewsProvider } from "../contexts/allNews.context";

const MainProvider = (props) => (
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
);
export default MainProvider;
