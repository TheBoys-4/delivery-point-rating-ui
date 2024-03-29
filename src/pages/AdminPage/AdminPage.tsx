import { Button, Upload, UploadProps } from "antd";
import {Admin, Resource, List, AppBar, Layout, TransformData, ResourceProps, Create, Datagrid, TextField, NumberField, Edit, SimpleForm, TextInput, NumberInput} from "react-admin"
import { dataProvider } from "./helpers";
import { AppBarProps } from "ra-ui-materialui/dist/cjs/layout/AppBar";
import {DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { BASE_URL } from "../../shared/constants";
import {getXlsx} from "../../api/requests";

const uploadProps: UploadProps = {
    name: 'file',
    action: `${BASE_URL}import/xlsx`,
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

    const onGrafana = () => {
        window.open('http://87.242.124.151:3001/', '_blank');
    }

    return <AppBar {...props}>
        <Upload {...uploadProps}>
            <Button style={{ marginLeft: '16px' }} icon={<UploadOutlined />}>Import</Button>
        </Upload>
        <Button style={{ marginLeft: '16px' }} icon={<DownloadOutlined />} onClick={onDownload}>
            Download
        </Button>
        <Button style={{ marginLeft: '16px' }} onClick={onGrafana}>
            Grafana
        </Button>
    </AppBar>
}

const MyList: ResourceProps['list'] = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <NumberField source="dateTime" />
                <NumberField source="score" />
                <TextField source="messageSource" />
                <TextField source="text" />
            </Datagrid>
        </List>
    )
}

const MyEdit: ResourceProps['edit'] = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <NumberInput source="dateTime" />
                <NumberInput source="score" />
                <TextInput source="messageSource" />
                <TextInput source="text" />
            </SimpleForm>
        </Edit>
    )
}

const MyCreate: ResourceProps['create'] = (props) => {
    const transform: TransformData = data => {
        const base = {
            client: {
                name: 1,
                phoneNumber: '88005553535',
                email: "email",
                sex: "yes",
                age: 20
            },
            "location": {
                "administrativeDistrict": "123",
                "district": "12333",
                "address": "555",
                "coordinate": "666",
                "locationType": "CITY"
            },
            "vendor": {
                "name": "vendor-name"
            },
        }

        return ({
            ...base,
            ...data,
        });
    }

    return <Create {...props} transform={transform}>
        <SimpleForm>
            <NumberInput source="dateTime" />
            <NumberInput source="score" />
            <TextInput source="messageSource" />
            <TextInput source="text" />
        </SimpleForm>
    </Create>
}


const MyLayout: typeof Layout = (props) => <Layout {...props} appBar={MyAppBar} />;


export const AdminPage = () => {
    return <Admin basename="/admin" layout={MyLayout} dataProvider={dataProvider}>
        <Resource name="messages" list={(props) => <MyList {...props} pagination={false} />} edit={MyEdit} create={MyCreate}  />
    </Admin>
}