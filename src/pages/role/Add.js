import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoadPanel } from 'devextreme-react/load-panel';

import { PostApi } from '../../managers/HttpManager';

// components
import TextBoxComponent from '../../components/textBox/TextBox';
import TextAreaComponent from '../../components/textArea/TextArea';
import { default as Button } from '../../components/button/Button';
import { default as CheckBox } from '../../components/checkBox/CheckBox';
import { default as SelectBox } from '../../components/selectBox/SelectBox';

//utiles
import { useToast } from '../../utils/toast/useToast';
import getStatusMessage from '../../utils/statusHandler';

// configs
import { CheckBoxConfig as canAddConfig } from './canAddCheckBoxConfig';
import { CheckBoxConfig as canEditConfig } from './canEditCheckBoxConfig';
import { CheckBoxConfig as IsShownConfig } from './isShownCheckBoxConfig';
import { ButtonConfig as SubmitButtonConfig } from './submitButtonConfig';
import { SelectBoxConfig as EntityConfig } from './entitySelectBoxConfig';
import { TextBoxConfig as TitleTextBoxConfig } from './titleTextBoxConfig';
import { CheckBoxConfig as canDeleteConfig } from './canDeleteCheckBoxConfig';
import { CheckBoxConfig as canPublishConfig } from './canPublishCheckBoxConfig';
import { TextAreaConfig as descriptionTextAreaConfig } from './decriptionTextAreaConfig';

export default function AddRule() {

    const history = useHistory();
    const { showMessage } = useToast();
    
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(true);
    const [title, setTitle] = useState("");
    const [entity, setEntity] = useState(0);
    const [Delete, setDelete] = useState(false);
    const [publish, setPublish] = useState(false);
    const [usersRole, setUsersRole] = useState([]);
    const [description, setDescription] = useState("");
    const [loadPanelVisible, setLoadPanelVisible] = useState(false);

    async function postRule(e) {
        try {

            setLoadPanelVisible(true)
            e.preventDefault();

            var postOjb = {
                "Add": add,
                "View": view,
                "Edit": edit,
                "Title": title,
                "Entity": entity,
                "Delete": Delete,
                "Publish": publish,
                "UsersRole": usersRole,
                "Description": description,
            };

            const data = await PostApi('/role/add', postOjb);

            if (data.status === 1) {
                setLoadPanelVisible(false)
                showMessage(true, getStatusMessage(data.status), 'success');

                history.replace('/en/Roles')
                window.location.reload()
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
                    <form className="form mb-15" id="kt_contact_form" onSubmit={postRule} >
                        <div className="card-body p-lg-18">
                            <div className="row mb-3">
                                <div className="col-md-18">
                                    <h2 className="fw-bolder text-dark mb-9">ایجادنقش جدید</h2>
                                    <div className="separator separator-dashed my-6"></div>
                                    <div className="row mb-5">
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">عنوان</label>
                                            <TextBoxComponent
                                                config={TitleTextBoxConfig}
                                                onValueChanged={(data) => setTitle(data.value)}
                                            ></TextBoxComponent>
                                        </div>
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">موجودیت</label>
                                            <SelectBox
                                                config={EntityConfig}
                                                onValueChanged={(data) => setEntity(data.value)}
                                            ></SelectBox>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column mb-10 fv-row">
                                        <label className="fs-6 fw-bold mb-2">توضیحات</label>
                                        <TextAreaComponent
                                            config={descriptionTextAreaConfig}
                                            onValueChanged={(data) => setDescription(data.value)}
                                        ></TextAreaComponent>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={IsShownConfig}
                                            onValueChanged={(data) => setView(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">نمایش موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان فقط نمایش در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canAddConfig}
                                            onValueChanged={(data) => setAdd(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">افزودن موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان افزودن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>

                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canEditConfig}
                                            onValueChanged={(data) => setEdit(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">ویرایش موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان ویرایش کردن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canDeleteConfig}
                                            onValueChanged={(data) => setDelete(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">حذف موجودیت</span>
                                            <span className="text-muted fs-6">با تیک زدن این آیتم امکان حذف کردن در موجودیت مورد نظر اعمال میشود</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canPublishConfig}
                                            onValueChanged={(data) => setPublish(data.value)} 
                                        />
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
                                visible={loadPanelVisible}
                                shading={true}
                                showPane={true}
                                showIndicator={true}
                                closeOnOutsideClick={false}
                                shadingColor="rgba(0,0,0,0.4)"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}