export interface IAppContext {
    user: string;
    logado: boolean;
    setLogado: (logado: boolean) => void
}