function LoadingPage() {
	return (
		<div style={{
			position: 'fixed',
			inset: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'rgba(255,255,255,0.8)',
			zIndex: 1000
		}}>
			<div style={{ textAlign: 'center' }}>
				<svg width="64" height="64" viewBox="0 0 50 50" aria-hidden="true">
					<circle cx="25" cy="25" r="20" fill="none" stroke="#d9d9d9" strokeWidth="4" />
					<path fill="#000" d="M25 5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z">
						<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
					</path>
				</svg>
				<div style={{ marginTop: 8, color: '#333', fontSize: 14 }}>Загрузка...</div>
			</div>
		</div>
	);
}

export { LoadingPage };