import { BrowserHistory } from "history";

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export default HistoryRouterProps
