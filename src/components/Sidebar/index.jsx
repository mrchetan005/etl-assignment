import { formTemplates } from "../../constants";
import FormsContainer from "./FormsContainer";


const Sidebar = () => {
    return (
        <aside className="sm:max-w-[28rem] bg-white sm:h-[calc(100vh-8rem)] overflow-y-auto p-8 border-r shadow">
            <div className="topSection">
                <FormsContainer />
            </div>
            <p className="text-sm text-[#595959] my-4">Explore the following Templates:</p>
            {
                formTemplates?.map(({ id, title, description }) => (
                    <FormsContainer key={id} title={title} description={description} />
                ))
            }
        </aside>
    )
}

export default Sidebar;