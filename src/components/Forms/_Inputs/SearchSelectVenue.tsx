import Image from "next/image";
import VenueTicket from "../../Tickets/VenueTicket";

interface Props {
  label: string;
  isComplete: boolean;
  error?: string;
  disabled?: boolean;
  options: Array<any>;
  showOptions: boolean;
  setShowOptions: (val: boolean) => void;
  selected: any;
  setSelected: (val: any) => void;
  searchName: string;
  searchValue: string;
  setSearchValue: (val: string) => void;
  onSearch: () => void;
  searchPlaceholder: string;
  loading: boolean;
}

export default function SearchSelectVenue(props: Props) {
  const {
    selected,
    setSelected,
    searchName,
    searchValue,
    setSearchValue,
    options,
    label,
    onSearch,
    isComplete,
    searchPlaceholder,
    showOptions,
    setShowOptions,
    loading,
    disabled,
    error,
  } = props;

  // Sort Alphabetically
  options.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="combobox-input-container">
      <div className="combobox-input">
        <div
          className={showOptions ? "input-field" : "input-field relative-index"}
        >
          <label htmlFor={searchName} className="label mb-5">
            {label}

            {isComplete && !error ? (
              <Image
                src="/svg/checkmark-circle.svg"
                height={16}
                width={16}
                className="field-check"
                alt="check-icon"
              />
            ) : null}

            {error ? <span className="input-error">{error}</span> : null}
          </label>

          {!disabled ? (
            <div className="combobox-dropdown-options">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder={searchPlaceholder}
                className={disabled ? "input disabled" : "input"}
                onFocus={(e) => {
                  const { value } = e.target;
                  if (value !== "") return setShowOptions(true);
                }}
                disabled={disabled}
              />
            </div>
          ) : null}
        </div>

        {/* List dropdown */}
        {showOptions ? (
          options.length > 0 ? (
            <div className="list-options combobox-list venue-combobox relative-index">
              <ul>
                {loading ? (
                  <li className="option loading">
                    <Image
                      src="/gif/loaders/loader-gray.gif"
                      height={30}
                      width={30}
                      alt="loader"
                    />
                  </li>
                ) : (
                  options.map((item, i) => {
                    return (
                      <li
                        className={
                          selected && selected.id === item.id
                            ? "option active"
                            : "option"
                        }
                        onClick={() => setSelected(item)}
                        key={i}
                      >
                        <VenueTicket venue={item} />
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          ) : (
            <div className="list-options combobox-list venue-combobox relative-index">
              <ul>
                <li className="option loading">No Results. Try Again</li>
              </ul>
            </div>
          )
        ) : null}

        {/* List Dropdown - Background Listener */}
        {showOptions ? (
          <span
            className="select-external-listener"
            onClick={() => setShowOptions(false)}
          />
        ) : null}
      </div>

      {!disabled ? (
        <div className="combobox-btn">
          <div className="submit-search-container">
            <span
              className={
                searchValue !== "" ? "submit-btn" : "submit-btn disabled"
              }
              onClick={() => onSearch()}
            >
              Search
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
