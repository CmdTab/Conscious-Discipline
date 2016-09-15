<?php include('header.php'); ?>
	<div class="full-section">
		<div class="portal-wrap portal-intro group">
			<div class="two-third first">
				<div class="gray-box spacing">
					<h3>
						Session One
					</h3>
				</div>
				<div class="fitvids">
					<iframe src="https://player.vimeo.com/video/178692138" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
			</div>
			<div class="third gray-box">
				<ul class="sidebar-list">
					<li class="title">Free Tools</li>
					<hr />
					<li>
						<a href="/_i/portal-bg.jpg" download>
							<?php include('../_svg/icon-cloud.php'); ?>
							Quickstart Guide (PDF)
						</a>
					</li>
					<li>
						<a href="#" class="faq-scroll">
							<?php include('../_svg/icon-tv.php'); ?>
							FAQ Video
						</a>
					</li>
				</ul>
				<ul class="sidebar-list">
					<li class="title">Next Steps</li>
					<hr />
					<li>
						<a href="/portal/session-two.php">
							<?php include('../_svg/icon-arrow-right.php'); ?>
							Continue with Session 2
						</a>
					</li>
					<li>
						<a href="/portal/view-all-sessions.php">
							<?php include('../_svg/icon-eye.php'); ?>
							See All Sessions
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<?php include('all-faq-list.php'); ?>

	<?php include('additional-resource-list.php'); ?>
	
<?php include('footer.php'); ?>