import { Button, Upload, UploadProps } from "antd";
import { Admin, Resource, ListGuesser, AppBar, Layout } from "react-admin"
import { dataProvider } from "./helpers";
import { AppBarProps } from "ra-ui-materialui/dist/cjs/layout/AppBar";
import {DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { BASE_URL } from "../../shared/constants";
import {getXlsx} from "../../api/requests";

const uploadProps: UploadProps = {
    name: 'file',
    action: `http://localhost:4000/api/delivery-point-rating/data-service/import/xlsx`,
    onChange: (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    },
};

const MyAppBar = (props: AppBarProps) => {
    const onDownload = () => {
        getXlsx();
    }

    return <AppBar {...props}>
        <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Import</Button>
        </Upload>
        <Button icon={<DownloadOutlined />} onClick={onDownload}>
            Download
        </Button>
    </AppBar>
}


const MyLayout: typeof Layout = (props) => <Layout {...props} appBar={MyAppBar} />;


export const AdminPage = () => {
    return <Admin basename="/admin" layout={MyLayout} dataProvider={dataProvider}>
        <Resource name="messages" list={ListGuesser} />
        <Resource name="messageTypes" list={ListGuesser} />
    </Admin>
}