import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SongForm = ({ song, allArtists, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Song</h1>
      <TextInput
        name="title"
        label="Title"
        value={song.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="artistId"
        label="Artist"
        value={song.artistId}
        defaultOption="Select Artist"
        options={allArtists}
        onChange={onChange}
        error={errors.artistId} />

      <TextInput
        name="year"
        label="Year"
        value={song.year}
        onChange={onChange}
        error={errors.year} />

      <TextInput
        name="genre"
        label="Genre"
        value={song.genre}
        onChange={onChange}
        error={errors.genre} />

      <TextInput
        name="length"
        label="Length"
        value={song.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="submit"
        disabled={saving}
        value="Save"
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

SongForm.propTypes = {
  song: React.PropTypes.object.isRequired,
  allArtists: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SongForm;
