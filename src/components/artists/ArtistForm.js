import React from 'react';
import TextInput from '../common/TextInput';

const ArtistForm = ({ artist, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Artists</h1>
      <TextInput
        name="name"
        label="Name"
        value={artist.name}
        onChange={onChange}
        error={errors.name} />

      <TextInput
        name="country"
        label="Country"
        value={artist.country}
        onChange={onChange}
        error={errors.country} />

      <TextInput
        name="year"
        label="Year"
        value={artist.year}
        onChange={onChange}
        error={errors.geyearnre} />

      <input
        type="submit"
        disabled={saving}
        value="Save"
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

ArtistForm.propTypes = {
  artist: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ArtistForm;
