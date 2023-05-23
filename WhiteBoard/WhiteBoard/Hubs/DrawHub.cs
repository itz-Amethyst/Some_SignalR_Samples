using Microsoft.AspNetCore.SignalR;

namespace WhiteBoard.Hubs
{
    public class DrawHub : Hub
    {
        public Task Draw(int prevX, int prevY, int currentX, int currentY, string color)
        {
            return Clients.Others.SendAsync("draw", prevX, prevY, currentX, currentY, color);
        }
    }
}
