import React from 'react';
import { connect } from 'react-redux';
import { addImage, editImage, deleteImage } from '../actions/images';

export class ImageCard extends React.Component {
  constructor(props) {
    super();
    const { title, subtitle, description } = props;
    this.state = { title, subtitle, description };
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value.trim() });
  };
  onSubtitleChange = (e) => {
    this.setState({ subtitle: e.target.value.trim() });
  };
  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value.trim() });
  };
  onUpdateClick = () => {
    const { title, subtitle, description } = this.state;
    const updates = { title, subtitle, description };
    this.props.editImage(this.props.id, updates);
  };
  onDiscardClick = () => {
    const { title, subtitle, description } = this.props;
    this.setState({ title, subtitle, description });
  };
  onRemoveClick = () => {
    this.props.deleteImage(this.props.id);
  };

  render() {
    const { onImageClick, editable } = this.props;
    const { title, subtitle, description } = this.state;
    if (editable) {
      return (
        <div className={'image-card'}>
          <div className={'image-card__image'} onClick={onImageClick}>
            <button
              className={'button button--floating-top-left button--danger'}
              onClick={this.onRemoveClick}
            />
          </div>
          <div>
            <input
              className={
                `image-card__title image-card__title--input${
                  this.state.title !== this.props.title ? ' is-dirty' : ''}`
              }
              value={title}
              onChange={this.onTitleChange}
            />
            <input
              className={
                `image-card__subtitle image-card__subtitle--input${
                  this.state.subtitle !== this.props.subtitle ? ' is-dirty' : ''}`
              }
              value={subtitle}
              onChange={this.onSubtitleChange}
            />
            <textarea
              className={
                `image-card__description image-card__description--textarea${
                  this.state.description !== this.props.description ? ' is-dirty' : ''}`
              }
              value={description}
              onChange={this.onDescriptionChange}
            />
            <div className={'image-card__actions'}>
              <button className={'button'} onClick={this.onUpdateClick}>Update</button>
              <button className={'button'} onClick={this.onDiscardClick}>Discard</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={'image-card'}>
        <div className={'image-card__image'} onClick={onImageClick} />
        <div>
          <h3 className={'image-card__title'}>{title}</h3>
          <h4 className={'image-card__subtitle'}>{subtitle}</h4>
          <p className={'image-card__description'}>{description}</p>
        </div>
      </div>
    );
  }
}

export default connect(undefined, { addImage, editImage, deleteImage })(ImageCard);
