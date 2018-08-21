handlers.bushelOnYourFirstDay = function(args) {
    // The server API can add virtual currency safely
    var addGoldResult = server.AddUserVirtualCurrency({
        PlayFabId: currentPlayerId,
        VirtualCurrency: "GO",
        Amount: 500
    });

    // When the server grants items, there's no cost to the player
    var appleBounty = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "main",
        ItemIds: ["apple", "apple"]
    });

    // Like AddUserVirtualCurrency, it's safer to call UpdatePlayerStatistics from Cloud Script
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
            "StatisticName": "xp",
            "Value": 10
        }]
    });

    log.info("I have 500 gold, two apples and 10 XP!");
}