import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LoadPanel } from 'devextreme-react/load-panel';
import { GetDataApi, PostApi } from '../../managers/HttpManager';

// components
import Chips from '../../components/chips/Chips';
import TextBoxComponent from '../../components/textBox/TextBox';
import TextAreaComponent from '../../components/textArea/TextArea';
import { default as Button } from '../../components/button/Button';
import { default as CheckBox } from '../../components/checkBox/CheckBox';
import { default as SelectBox } from '../../components/selectBox/SelectBox';

//utiles
import { useToast } from '../../utils/toast/useToast';
import getStatusMessage from '../../utils/statusHandler';

// configs
import { ChipsConfig as UsersRole } from './editConfigs/chipsConfig';
import { CheckBoxConfig as canAddConfig } from './editConfigs/canAddCheckBoxConfig';
import { CheckBoxConfig as canEditConfig } from './editConfigs/canEditCheckBoxConfig';
import { CheckBoxConfig as IsShownConfig } from './editConfigs/isShownCheckBoxConfig';
import { ButtonConfig as SubmitButtonConfig } from './editConfigs/submitButtonConfig';
import { SelectBoxConfig  } from './editConfigs/entitySelectBoxConfig';
import { TextBoxConfig as TitleTextBoxConfig } from './editConfigs/titleTextBoxConfig';
import { CheckBoxConfig as canDeleteConfig } from './editConfigs/canDeleteCheckBoxConfig';
import { CheckBoxConfig as canPublishConfig } from './editConfigs/canPublishCheckBoxConfig';
import { TextAreaConfig as descriptionTextAreaConfig } from './editConfigs/decriptionTextAreaConfig';


export default function Edit() {

    let { uid } = useParams();
    const history = useHistory();
    const { showMessage } = useToast();
    const [add, setAdd] = useState(null);
    const [edit, setEdit] = useState(null);
    const [view, setView] = useState(null);
    const [title, setTitle] = useState(null);
    const [entity, setEntity] = useState(null);
    const [Delete, setDelete] = useState(null);
    const [publish, setPublish] = useState(null);
    const [usersRole, setUsersRole] = useState(null);
    const [description, setDescription] = useState(null);
    const [loadPanelVisible, setLoadPanelVisible] = useState(null);


    useEffect(() => {
        async function getLoadData() {

            try {

                setLoadPanelVisible(true);
                const data = await GetDataApi('/role/item?uid=' + uid);
console.log(data.content.entity)
                if (data.status === 1) {
                    setAdd(data.content.add);
                    setEdit(data.content.edit);
                    setView(data.content.view);
                    setTitle(data.content.title);
                    setDelete(data.content.delete);
                    setEntity(data.content.entity);
                    setPublish(data.content.publish);
                    setUsersRole(data.content.usersRole);
                    setDescription(data.content.description);
                    setLoadPanelVisible(false);
                }
                else {
                }
            }
            catch (e) {
                return (
                    <div>خطایی در واکشی داده رخ داده است</div>
                )
            }
        }
        getLoadData();
    }, []);

    async function postRole(e) {
        try {

            setLoadPanelVisible(true)
            e.preventDefault();

            let sendUsersRole = []
            usersRole.map((data) => sendUsersRole.push(
                {'userUID': data.userUID, 'name': ''}
            ))

            var postOjb = {
                "RoleUID": uid,
                "Add": add,
                "View": view,
                "Edit": edit,
                "Title": title,
                "Entity": entity,
                "Delete": Delete,
                "Publish": publish,
                "UsersRole": sendUsersRole,
                "Description": description,
            };

            const data = await PostApi('/role/edit', postOjb);
console.log(data)
            if (data.status === 1) {
                setLoadPanelVisible(false)
                showMessage(true, getStatusMessage(data.status), 'success');

                history.replace('/roles')
            } else {
                setLoadPanelVisible(false)
                showMessage(true, getStatusMessage(data.status), 'error');
            }
        }
        catch (e) {
            showMessage(true, 'خطایی در واکشی داده رخ داده است', 'error');
        }
    }


    return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <div className="card">
                    <form className="form mb-15" id="kt_contact_form" onSubmit={postRole} >
                        <div className="card-body p-lg-18" id="role-edit">
                            <div className="row mb-3">
                                <div className="col-md-18">
                                    <h2 className="fw-bolder text-dark mb-9">ویرایش نقش</h2>
                                    <div className="separator separator-dashed my-6"></div>
                                    <div className="row mb-5">
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">عنوان</label>
                                            {
                                                title != null &&
                                                <TextBoxComponent
                                                    config={TitleTextBoxConfig}
                                                    defaultValue={title}
                                                    onValueChanged={(data) => setTitle(data.value)}
                                                ></TextBoxComponent>
                                            }
                                        </div>
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">موجودیت</label>
                                            {
                                                entity != null &&
                                                <SelectBox
                                                    config={SelectBoxConfig}
                                                    defaultValue={entity}
                                                    onValueChanged={(data) => console.log(data.value)}
                                                ></SelectBox>
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column mb-10 fv-row">
                                        <label className="fs-6 fw-bold mb-2">توضیحات</label>
                                        {
                                            description != null &&
                                            <TextAreaComponent
                                                defaultValue={description}
                                                config={descriptionTextAreaConfig}
                                                onValueChanged={(data) => setDescription(data.value)}
                                            ></TextAreaComponent>
                                        }
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-6"></div>
                                <div className="row">
                                    <div className="d-flex flex-column mb-10 fv-row">
                                        <label className="fs-6 fw-bold mb-2">کاربران در این نقش</label>
                                        {
                                            entity != null && usersRole != null &&
                                            <Chips
                                                config={UsersRole}
                                                setValue={setUsersRole}
                                                defaultValue={usersRole}
                                                filterParams={[`entity=2`]}
                                                // filterParams={[`entity=${entity}`]}
                                            /> 
                                        }
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-6"></div>
                                <div className="row">
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        {
                                            view != null &&
                                            <CheckBox
                                                config={IsShownConfig}
                                                defaultValue={view}
                                                onValueChanged={(data) => setView(data.value)}
                                            />
                                        }
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">نمایش موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان فقط نمایش در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        {
                                            add != null &&
                                            <CheckBox
                                                config={canAddConfig}
                                                defaultValue={add}
                                                onValueChanged={(data) => setAdd(data.value)}
                                            />
                                        }
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">افزودن موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان افزودن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>

                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        {
                                            edit != null &&
                                            <CheckBox
                                                config={canEditConfig}
                                                defaultValue={edit}
                                                onValueChanged={(data) => setEdit(data.value)}
                                            />
                                        }
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">ویرایش موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان ویرایش کردن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        {
                                            Delete != null &&
                                            <CheckBox
                                                config={canDeleteConfig}
                                                defaultValue={Delete}
                                                onValueChanged={(data) => setDelete(data.value)}
                                            />
                                        }
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">حذف موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان حذف کردن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        {
                                            publish != null &&
                                            <CheckBox
                                                config={canPublishConfig}
                                                defaultValue={publish}
                                                onValueChanged={(data) => setPublish(data.value)}
                                            />
                                        }
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">عمومی سازی موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان عموی سازی موجودیت فراهم میشود</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <Button config={SubmitButtonConfig} />
                            <LoadPanel
                                shading={true}
                                showPane={true}
                                rtlEnabled={true}
                                showIndicator={true}
                                visible={loadPanelVisible}
                                closeOnOutsideClick={false}
                                shadingColor="rgba(0,0,0,0.4)"
                                message={'در حال آماده سازی ...'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}