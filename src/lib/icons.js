// Icon mapping utility for lucide-react icons
import * as Icons from 'lucide-react';

// Map of icon names to actual icon components
export const iconMap = {
  Search: Icons.Search,
  Users: Icons.Users,
  TrendingUp: Icons.TrendingUp,
  FileText: Icons.FileText,
  Mail: Icons.Mail,
  Palette: Icons.Palette,
  Code: Icons.Code,
  BarChart3: Icons.BarChart3,
  ArrowRight: Icons.ArrowRight,
  ArrowLeft: Icons.ArrowLeft,
  CheckCircle: Icons.CheckCircle,
  Menu: Icons.Menu,
  X: Icons.X,
  ChevronDown: Icons.ChevronDown,
  Target: Icons.Target,
  Lightbulb: Icons.Lightbulb,
  Trophy: Icons.Trophy,
  Heart: Icons.Heart,
  Zap: Icons.Zap,
  Calendar: Icons.Calendar,
  Clock: Icons.Clock,
  Share2: Icons.Share2,
  Link: Icons.Link,
  Send: Icons.Send,
  Loader2: Icons.Loader2,
  AlertCircle: Icons.AlertCircle,
  CheckCircle2: Icons.CheckCircle2,
  MapPin: Icons.MapPin,
  Phone: Icons.Phone,
  MessageCircle: Icons.MessageCircle,
  User: Icons.User,
  Quote: Icons.Quote,
};

// Get icon component by name
export function getIcon(name) {
  return iconMap[name] || Icons.Star;
}
