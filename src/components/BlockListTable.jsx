import React from 'react';
import moment from 'moment';
import { Utils } from 'alchemy-sdk';

const BlockListTable = ({ blocks }) => {
	return (
		<div className="bg-secondary rounded-xl">
			<div className="overflow-x-auto">
				<table className="table w-full text-white">
					<thead>
						<tr>
							<th>Block</th>
							<th>Time</th>
							<th>Txn</th>
							{/* <th>Fee Recipient</th> */}
							<th>Gas Used</th>
							<th>Gas Limit</th>
							<th>Base Fee</th>
						</tr>
					</thead>
					<tbody>
						{blocks.map((block) => {
							return (
								<tr key={block?.number}>
									<th>{block?.number}</th>
									<th>{block?.timestamp && moment.utc(block?.timestamp).local().startOf('seconds').fromNow()}</th>
									<th>{block?.transactions?.length}</th>
									{/* <th>Fee Recipient</th> */}
									<th>{parseInt(block?.gasUsed?._hex).toLocaleString()}</th>
									<th>{parseInt(block?.gasLimit?._hex).toLocaleString()}</th>
									<th>{(parseInt(block?.baseFeePerGas?._hex) / 10 ** 9).toFixed(2)} Gwei</th>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BlockListTable;
