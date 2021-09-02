import React from "react";
import './Content.scss';
import InvitePane from "./panes/InvitePane";
import RemovePane from "./panes/RemovePane";
import GuildSettingsPane from "./panes/GuildSettingsPane";

function Content({ guild, currentTabId, botInfo }) {
    return <div className={"content"}>
        {currentTabId === "invite-me" ?
            <InvitePane botInfo={botInfo} /> : 
        currentTabId === "remove-me" ?
            <RemovePane botInfo={botInfo} /> :
        currentTabId === "guild-settings" ?
            <GuildSettingsPane guild={guild} botInfo={botInfo} /> :
            undefined
        }
    </div>
}

export default Content;