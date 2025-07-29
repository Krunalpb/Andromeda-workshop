import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Solarion Token Exchange",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr13cpkx24z2r8fgjtp7x4ym9pmdrlny26uaypr7yndz9x8u77mkwyqpaq6w3",
            cw20: "andr1pvsn5zhs9n0320xs58elwvczedz0hkmq0utvgh3wnajwnh4lyz3seum3nv",
            name: "Solarion Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
