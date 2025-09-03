module.exports = {
  'host': process.env.EMAIL_HOST || 'smtp.mailgun.org',
  'username': process.env.EMAIL_USERNAME || 'postmaster@mg.tiledesk.com',
  'from': process.env.EMAIL_FROM || 'Tiledesk Notification <postmaster@mg.tiledesk.com>',
  'bcc': process.env.EMAIL_BCC || '',
  'baseUrl': process.env.EMAIL_BASE_URL || process.env.DASHBOARD_BASE_URL || 'http://localhost:8081/dashboard',
  'replyEnabled': process.env.EMAIL_REPLY_ENABLED === 'true' || false,
  'inboundDomain': process.env.EMAIL_INBOUND_DOMAIN || 'tickets.tiledesk.com'
};
