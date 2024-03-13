import { useState } from 'react';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';


export function JournalPage() {
	const [items, setItems] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState(null);

	function mapItems(items) {
		if (!items) {
			return [];
		}
		return items.map(i => ({
			...i,
			date: new Date(i.date)
		}));
	}

	function addItem(item) {
		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
			}]);
		} else {
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item
					};
				} 
				return i;
			})]);
		}
	}

	function deleteItem(id) {
		setItems([...items.filter(i => i.id !== id)]);
	}

	return {
		items: mapItems(items),
		selectedItem,
		setSelectedItem,
		addItem,
		deleteItem
	};
}