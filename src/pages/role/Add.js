import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoadPanel } from 'devextreme-react/load-panel';
import { useTranslation } from 'react-i18next';

import { PostApi } from '../../managers/HttpManager';

// components
import TextBoxComponent from '../../components/textBox/TextBox';
import TextAreaComponent from '../../components/textArea/TextArea';
import { default as CheckBox } from '../../components/checkBox/CheckBox';
import { default as SelectBox } from '../../components/selectBox/SelectBox';

//utiles
import { useToast } from '../../utils/toast/useToast';
import getStatusMessage from '../../utils/statusHandler';

// configs
import { CheckBoxConfig as canAddConfig } from './canAddCheckBoxConfig';
import { CheckBoxConfig as canEditConfig } from './canEditCheckBoxConfig';
import { CheckBoxConfig as IsShownConfig } from './isShownCheckBoxConfig';
import { SelectBoxConfig as EntityConfig } from './entitySelectBoxConfig';
import { TextBoxConfig as TitleTextBoxConfig } from './titleTextBoxConfig';
import { CheckBoxConfig as canDeleteConfig } from './canDeleteCheckBoxConfig';
import { CheckBoxConfig as canPublishConfig } from './canPublishCheckBoxConfig';
import { TextAreaConfig as descriptionTextAreaConfig } from './decriptionTextAreaConfig';

export default function AddRule() {

    const history = useHistory();
    const { showMessage } = useToast();
    const{t}=useTranslation()

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
            showMessage(true,t('FetchingError'), 'error');
        }
    }

    
  var selectValue = localStorage.getItem('lng');
  if(null === selectValue)
{
  selectValue = 'fa';
}
let dir
selectValue==='en'?dir="ltr":dir="rtl"

    return (
        <div dir={dir} className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <div className="card">
                    <form className="form mb-15" id="kt_contact_form" onSubmit={postRule} >
                        <div className="card-body p-lg-18">
                            <div className="row mb-3">
                                <div className="col-md-18">
                                    <h2 className="fw-bolder text-dark mb-9">{t('addrole')}</h2>
                                    <div className="separator separator-dashed my-6"></div>
                                    <div className="row mb-5">
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">{t('title')}</label>
                                            <TextBoxComponent
                                                config={TitleTextBoxConfig}
                                                onValueChanged={(data) => setTitle(data.value)}
                                            ></TextBoxComponent>
                                        </div>
                                        <div className="col-md-6 fv-row">
                                            <label className="fs-5 fw-bold mb-2">{t('existence')}</label>
                                            <SelectBox
                                                config={EntityConfig}
                                                onValueChanged={(data) => setEntity(data.value)}
                                            ></SelectBox>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column mb-10 fv-row">
                                        <label className="fs-6 fw-bold mb-2">{t('Description')}</label>
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
                                            <span className="fw-bolder fs-5 mb-0">{t('existenceShow')}</span>
                                            <span className="text-muted fs-6">{t('showChecbox')}</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canAddConfig}
                                            onValueChanged={(data) => setAdd(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0"> {t('existenceAdd')}</span>
                                            <span className="text-muted fs-6">{t('addChecbox')}</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>

                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canEditConfig}
                                            onValueChanged={(data) => setEdit(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0"> {t('existenceEdit')}</span>
                                            <span className="text-muted fs-6">{t('editChecbox')}</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canDeleteConfig}
                                            onValueChanged={(data) => setDelete(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">{t('existenceDelete')} </span>
                                            <span className="text-muted fs-6">{t('deleteChecbox')}</span>
                                        </span>
                                    </label>
                                    <div className="separator separator-dashed my-6"></div>
                                    <label className="form-check form-check-custom form-check-solid align-items-start">
                                        <CheckBox
                                            config={canPublishConfig}
                                            onValueChanged={(data) => setPublish(data.value)} 
                                        />
                                        <span className="form-check-label d-flex flex-column align-items-start">
                                            <span className="fw-bolder fs-5 mb-0">{t('existencedeclaration')}</span>
                                            <span className="text-muted fs-6">{t('publishChecbox')} </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                        <button className="btn btn-primary" type="submit">
                      {t('save')}
                    </button>
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