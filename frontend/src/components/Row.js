export default function Row({ label, quantity, expirationDate, price }) {
   return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
            </div>
            <div>
              <div className="font-bold">{label}</div>
              <div className="text-sm opacity-50">Placeholder</div>
            </div>
          </div>
        </td>
        <td>
          {quantity}
        </td>
        <td>{expirationDate}</td>
        <td>{price}</td>
        <td>
        <button className="btn btn-sm">Remove</button>
        </td>
      </tr>
    )
}