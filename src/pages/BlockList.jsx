import React, { useEffect, useState } from 'react';
import BlockListTable from '../components/BlockListTable';
// import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Search from '../components/Search';
import alchemy from '../utils/alchemy';

const BlockList = () => {
	const [blocks, setBlocks] = useState([]);
	const [lastBlock, setLastBlock] = useState();
	// const [startBlock, setStartBlock] = useState();
	const [loading, setLoading] = useState(true);

	const getBlockNumbers = async () => {
		const block = await alchemy.core.getBlockNumber();
		setLastBlock(block);
	};

	const getBlocks = async () => {
		const blocks = [];
		const start = lastBlock - 10;
		console.log("start", start)
		console.log("lastBlock", lastBlock)
		for (let i = start; i <= lastBlock; i++) {
			const block = await alchemy.core.getBlockWithTransactions(i);
			blocks.push(block);
		}
		setBlocks(blocks);
	};

	useEffect(() => {
		getBlockNumbers();
	}, []);

	useEffect(() => {
		if (lastBlock) {
			getBlocks();
		}
	}, [lastBlock]);

	useEffect(() => {
		console.log(blocks);
	}, [blocks]);

	return (
		<Layout>
			<div className="">
				<div>
					<Search />
				</div>
				<div className="mt-10">
					<BlockListTable blocks={blocks} />
				</div>
			</div>
		</Layout>
	);
};

export default BlockList;
