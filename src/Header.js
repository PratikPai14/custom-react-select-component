import React from "react";
import arrowDown from "./arrow-down.svg";

function Header({
	toggle,
	showSelected,
	setShowSelected,
	query,
	handleSearchChange,
	placeholder,
	open,
	setOpen,
	selection,
	search,
	alwaysOpen,
}) {
	function headerOnClick() {
		!alwaysOpen && toggle(!open);

		setShowSelected(false);
		!open
			? document.getElementById("header__search")?.focus()
			: document.getElementById("header__search")?.blur();
	}

	return (
		<div
			tabIndex={0}
			className="dd-header"
			role="button"
			onClick={headerOnClick}
		>
			<Placeholder
				showSelected={showSelected}
				query={query}
				handleSearchChange={handleSearchChange}
				placeholder={placeholder}
				setOpen={setOpen}
				selection={selection}
				search={search}
			/>

			<ActionButton open={open} />
		</div>
	);
}

function Placeholder({
	showSelected,
	query,
	handleSearchChange,
	placeholder,
	setOpen,
	selection,
	search,
}) {
	return (
		<div className="dd-header__placeholder">
			{!showSelected ? (
				search ? (
					<input
						className="dd-header__search"
						type="text"
						id="header__search"
						value={query}
						onChange={handleSearchChange}
						placeholder={placeholder}
						onClick={(e) => {
							e.stopPropagation();
							setOpen(true);
						}}
					/>
				) : (
					<p className="dd-header__placeholder--bold">
						{selection
							.reduce((total, curr) => {
								return total + ", " + curr.name;
							}, "")
							.substring(1)}
					</p>
				)
			) : selection.length === 0 ? (
				<p className="dd-header__placeholder--bold">{placeholder}</p>
			) : (
				<p className="dd-header__placeholder--bold">
					{selection
						.reduce((total, curr) => {
							return total + ", " + curr.name;
						}, "")
						.substring(1)}
				</p>
			)}
		</div>
	);
}

function ActionButton({ open }) {
	return (
		<div className="dd-header__action">
			{open ? (
				<p className="dd-header__arrow-rotate">
					<img src={arrowDown} alt="" width="20px" />
				</p>
			) : (
				<p>
					<img src={arrowDown} alt="" width="20px" />
				</p>
			)}
		</div>
	);
}

export default Header;
