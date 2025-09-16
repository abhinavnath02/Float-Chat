import FiltersComponent from './FiltersComponent';
import ChatComponent from './ChatComponent';

const Sidebar = () => {
  return (
    <aside className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-4">
      <div className="border-b pb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Filters</h2>
        <FiltersComponent />
      </div>
      
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Chat Assistant</h2>
        <ChatComponent />
      </div>
    </aside>
  );
};

export default Sidebar;
