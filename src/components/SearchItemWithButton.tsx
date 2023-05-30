import AddProjectButton from "./AddProjectButton";

type Props = {
  buttonText: string;
  searchItem: string;};

function SearchItemWithButton({ buttonText, searchItem } : Props) {
  return (
    <div className="flex-2 mb-4 flex justify-end">
      <div className="form-control">
        <input
          type="text"
          placeholder={`${searchItem}`}
          className="input-bordered input"
        />
      </div>
      <div className="btn-primary btn ml-2">{buttonText}</div>
      <AddProjectButton />
    </div>
  );
}

export default SearchItemWithButton;
