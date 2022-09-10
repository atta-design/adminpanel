import { KTSVG } from '../../utils/KTSVG'
import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { PostApi } from '../../managers/HttpManager';
import { LoadPanel } from 'devextreme-react/load-panel';
import ProgressBar from 'devextreme-react/progress-bar';
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic';

// components
import TextBoxComponent from '../textBox/TextBox';
import { default as Button } from '../button/Button';
import {default as FileUploader} from '../fileUploader/FileUploader';

//utiles
import { useToast } from '../../utils/toast/useToast';
import getStatusMessage from '../../utils/statusHandler';

// configs
import { TextBoxConfig as TitleTextBoxConfig } from './configs/country/TitleConfig';
import { FileUploaderConfig as ImageDropZone } from './configs/country/imageConfig';
import { ButtonConfig as SubmitButtonConfig } from './configs/country/SubmitButtonConfig';
import { FileUploaderConfig as ThumbnailDropZone } from './configs/country/thumbnailConfig';

// styles
import './styles/dropZone.css'
import '../ckEditor/styles.css'


export default function CountryCreateModal(props) {

	const titleModal = props.title

	const { showMessage } = useToast();
    const [loadPanelVisible, setLoadPanelVisible] = useState(false);

    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [tradition, setTradition] = useState(null);
    const [foodCulture, setFoodCulture] = useState(null);
    const [popularCondiments, setPopularCondiments] = useState(null);


    // Image Drop zone ############################################
    const [imageAlt, setImageAlt] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [imageTextVisible, setImageTextVisible] = useState(true);
    const [imageProgressValue, setImageProgressValue] = useState(0);
    const [imageProgressVisible, setImageProgressVisible] = useState(false);
    const [isDropZoneImageActive, setIsDropZoneImageActive] = useState(false);


    function onInitializedImage(e) {
        if (image) {
            setImageSource(`/assets/media/avatars/${image}.jpg`)
            setIsDropZoneImageActive(false);
            setImageTextVisible(false);
        }
    }

    function onDropZoneEnterImage(e) {
        if (e.dropZoneElement.id === 'image-dropzone-external') {
            setIsDropZoneImageActive(true);
        }
    }
    
    function onDropZoneLeaveImage(e) {
        if (e.dropZoneElement.id === 'image-dropzone-external') {
            setIsDropZoneImageActive(false);
        }
    }

    function onUploadedImage(e) {
        const { file } = e;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setIsDropZoneImageActive(false);
            setImageSource(fileReader.result)
        };
        fileReader.readAsDataURL(file);
        setImageProgressValue(0);
        setImageTextVisible(false);
        setImageProgressVisible(false);
    }

    function onProgressImage(e) {
        setImageProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
    }

    function onUploadStartedImage() {
        setImageSource('');
        setImageProgressVisible(true);
    }
    // ############################################################

    // Thumbnail Drop zone ########################################
    const [thumbnailAlt, setThumbnailAlt] = useState('');
    const [thumbnailSource, setThumbnailSource] = useState('');
    const [thumbnailTextVisible, setThumbnailTextVisible] = useState(true);
    const [thumbnailProgressValue, setThumbnailProgressValue] = useState(0);
    const [thumbnailProgressVisible, setThumbnailProgressVisible] = useState(false);
    const [isDropZoneThumbnailActive, setIsDropZoneThumbnailActive] = useState(false);

    function onInitializedThumbnail(e) {
        if (thumbnail) {
            setThumbnailSource(`/assets/media/avatars/${thumbnail}.jpg`)
            setIsDropZoneThumbnailActive(false);
            setThumbnailTextVisible(false);
        }
    }

    function onDropZoneEnterThumbnail(e) {
        if (e.dropZoneElement.id === 'thumbnail-dropzone-external') {
            setIsDropZoneThumbnailActive(true);
        }
    }
    
    function onDropZoneLeaveThumbnail(e) {
        if (e.dropZoneElement.id === 'thumbnail-dropzone-external') {
            setIsDropZoneThumbnailActive(false);
        }
    }

    function onUploadedThumbnail(e) {
        const { file } = e;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setIsDropZoneThumbnailActive(false);
            setThumbnailSource(fileReader.result)
        };
        fileReader.readAsDataURL(file);
        setThumbnailProgressValue(0);
        setThumbnailTextVisible(false);
        setThumbnailProgressVisible(false);
    }

    function onProgressThumbnail(e) {
        setThumbnailProgressValue(
            (e.bytesLoaded / e.bytesTotal) * 100
        );
    }

    function onUploadStartedThumbnail() {
        setThumbnailSource('');
        setThumbnailProgressVisible(true);
    }
    // ############################################################


    const resetDropZoneSettings = () => {
        setImageAlt('')
        setImageSource('')
        setImageProgressValue(0)
        setImageTextVisible(true)
        setImageProgressVisible(false)
        setIsDropZoneImageActive(false)

        setThumbnailAlt('')
        setThumbnailSource('')
        setThumbnailProgressValue(0)
        setThumbnailTextVisible(true)
        setThumbnailProgressVisible(false)
        setIsDropZoneThumbnailActive(false)
    }
    
    const nullVariables = () => {
        setTitle(null);
        setImage(null);
        setThumbnail(null);
        setTradition(null);
        setFoodCulture(null);
        setPopularCondiments(null);
    }

	useEffect(() => {
        nullVariables();
        resetDropZoneSettings();
    }, []);

    async function postCountry(e) {
        console.log('create')
        try {

            setLoadPanelVisible(true)
            e.preventDefault();

            var postOjb = {
                "title": title,
                "image": imageSource,
                "tradition": tradition,
                "foodCulture": foodCulture,
                "thumbnail": thumbnailSource,
                "popularCondiments": popularCondiments,
            };

            const data = await PostApi('/country/add', postOjb);

            if (data.status === 1) {
                setLoadPanelVisible(false)
                showMessage(true, getStatusMessage(data.status), 'success');
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
		<div className='modal fade' id='kt_modal_create_country' aria-hidden='true'>
			<div className='modal-dialog modal-fullscreen p-9'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h2>{titleModal}</h2>

						<div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
							<KTSVG path='/assets/media/icons/duotone/arrows/arr061.svg' className='svg-icon-1' />
						</div>
					</div>

					<div className='modal-body py-lg-10 px-lg-10'>
						<div className='flex-row-fluid py-lg-5 px-lg-15'>
                        {
                            <form className="form mb-15" id="kt_contact_form" onSubmit={postCountry} >
                                <div className="card-body p-lg-18" id="role-edit">
                                    <div className="row mb-3">
                                        <div className="row">
                                            <div className="d-flex flex-column mb-10 fv-row">
                                                <label className="fs-5 fw-bold mb-2">عنوان</label>
                                                {
                                                    <TextBoxComponent
                                                        config={TitleTextBoxConfig}
                                                        onValueChanged={(data) => setTitle(data.value)}
                                                    ></TextBoxComponent>
                                                }
                                            </div>
                                        </div>
                                     
                                        <div className="separator separator-dashed my-6"></div>
                                        <div className="row">
                                            <div className="d-flex flex-column mb-10 fv-row">
                                                <label className="fs-5 fw-bold mb-2">فرهنگ غذایی</label>
                                                {
                                                    <CKEditor
                                                        editor={ ClassicEditor }
                                                        onChange={ ( event, editor ) => {
                                                            setFoodCulture(editor.getData());
                                                        }}
                                                        onReady={(editor) => {
                                                            editor.editing.view.change( writer => {
                                                                writer.setStyle( 'max-height', '200px', editor.editing.view.document.getRoot() );
                                                            } );
                                                        }}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="separator separator-dashed my-6"></div>
                                        <div className="row">
                                            <div className="d-flex flex-column mb-10 fv-row">
                                                <label className="fs-6 fw-bold mb-2">چاشنی های محبوب</label>
                                                {
                                                    <CKEditor
                                                        editor={ ClassicEditor }
                                                        onChange={ ( event, editor ) => {
                                                            setPopularCondiments(editor.getData());
                                                        }}
                                                        onReady={(editor) => {
                                                            editor.editing.view.change( writer => {
                                                                writer.setStyle( 'max-height', '200px', editor.editing.view.document.getRoot() );
                                                            } );
                                                        }}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="separator separator-dashed my-6"></div>
                                        <div className="row">
                                            <div className="d-flex flex-column mb-10 fv-row">
                                                <label className="fs-6 fw-bold mb-2">سنت</label>
                                                {
                                                    <CKEditor
                                                        editor={ ClassicEditor }
                                                        onChange={ ( event, editor ) => {
                                                            setTradition(editor.getData());
                                                        }}
                                                        onReady={(editor) => {
                                                            editor.editing.view.change( writer => {
                                                                writer.setStyle( 'max-height', '200px', editor.editing.view.document.getRoot() );
                                                            } );
                                                        }}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="separator separator-dashed my-6"></div>
                                        <div className="col-md-18">
                                            <div className="row mb-5">
                                                <div className="col-md-6 fv-row">
                                                    <label className="fs-6 fw-bold mb-2">عکس</label>
                                                    <div id="image-dropzone-external" className={`drop-zone flex-box ${isDropZoneImageActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
                                                        {imageSource && <img id="dropzone-image" src={imageSource} alt={imageAlt} />}
                                                        {imageTextVisible
                                                        && <div id="dropzone-text" className="flex-box">
                                                            <span>Drag & Drop the desired file</span>
                                                            <span>…or click to browse for a file instead.</span>
                                                        </div>}
                                                        <ProgressBar
                                                            id="upload-progress"
                                                            min={0}
                                                            max={100}
                                                            width="30%"
                                                            showStatus={false}
                                                            visible={imageProgressVisible}
                                                            value={imageProgressValue}
                                                        ></ProgressBar>
                                                        <FileUploader
                                                            config={ImageDropZone}
                                                            onUploaded={onUploadedImage}
                                                            onProgress={onProgressImage}
                                                            onInitialized={onInitializedImage}
                                                            onDropZoneEnter={onDropZoneEnterImage}
                                                            onDropZoneLeave={onDropZoneLeaveImage}
                                                            onUploadStarted={onUploadStartedImage}    
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6 fv-row">
                                                    <label className="fs-6 fw-bold mb-2">Thumbnail</label>
                                                    <div id="thumbnail-dropzone-external" className={`drop-zone flex-box ${isDropZoneThumbnailActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
                                                        {thumbnailSource && <img id="dropzone-image" src={thumbnailSource} alt={thumbnailAlt} />}
                                                        {thumbnailTextVisible
                                                        && <div id="dropzone-text" className="flex-box">
                                                            <span>Drag & Drop the desired file</span>
                                                            <span>…or click to browse for a file instead.</span>
                                                        </div>}
                                                        <ProgressBar
                                                            id="thumbnail-upload-progress"
                                                            min={0}
                                                            max={100}
                                                            width="30%"
                                                            showStatus={false}
                                                            visible={thumbnailProgressVisible}
                                                            value={thumbnailProgressValue}
                                                        ></ProgressBar>
                                                        <FileUploader
                                                            config={ThumbnailDropZone}
                                                            onUploaded={onUploadedThumbnail}
                                                            onProgress={onProgressThumbnail}
                                                            onInitialized={onInitializedThumbnail}
                                                            onDropZoneEnter={onDropZoneEnterThumbnail}
                                                            onDropZoneLeave={onDropZoneLeaveThumbnail}
                                                            onUploadStarted={onUploadStartedThumbnail}    
                                                        />
                                                    </div>
                                                </div>
                                            </div>
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
                        }
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
