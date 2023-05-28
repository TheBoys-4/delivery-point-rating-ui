import { Admin, Resource, ListGuesser } from "react-admin"
import { dataProvider } from "./helpers";

export const AdminPage = () => {
    return <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name="messages" list={ListGuesser} />
        <Resource name="messageTypes" list={ListGuesser} />
    </Admin>
}